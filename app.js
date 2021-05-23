const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const catchAsync = require('./utils/catchAsync');
const methodOverride = require('method-override');
const dbUrl = 'mongodb+srv://Boss:jAf7sNefCQYxl88B@cluster0.6clau.mongodb.net/unixo?retryWrites=true&w=majority' // mongo cloud db
const PORT = process.env.PORT || '3000';
const { isLoggedIn } = require('./middleware')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const Order = require('./models/order');
const Code = require('./models/code');


const ExpressError = require('./utils/ExpressError');

mongoose.connect(dbUrl, {  //'mongodb://localhost:27017/yelp-camp' for local db // dbUrl for mongo cloud
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected')
})

// Models
const Kick = require('./models/kick');
const Collection = require('./models/colection');
const order = require('./models/order');
const { findOne } = require('./models/user');
const colection = require('./models/colection');


const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
    secret: '!!!420BaNaNaSplit420!!!',
    resave: false,
    saveUnitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 10,
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}


app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');

    res.locals.currentUser = req.user;
    req.session.returnTo = req.originalUrl;
    if (!req.session.cart) {
        req.session.cart = [];
        req.session.cart.push('test');
    }
    let cartTotal = 0;
    if (req.session.cart) {
        for (i = 1; i < req.session.cart.length; i++) {
            cartTotal += req.session.cart[i].price;
        }
    }
    res.locals.cartTotal = cartTotal;
    res.locals.cart = req.session.cart;
    next();
})



app.get('/', catchAsync(async (req, res) => {
    const kicks = await Kick.find({});
    // const order = await Order.findOne({ _id: '6094580e36215c40e4f24fdf' }).populate('kicks');
    // console.log(order);


    res.render('home', { kicks })
}))

app.get('/shop/collections/:collectionId', catchAsync(async (req, res) => {
    const { collectionId } = req.params;
    const collection = await Collection.findOne({ collectionId }).populate('kicks');
    console.log(collection)
    res.render('kicks/collection', { collection });
}))

app.get('/shop/collections/:collectionId/:kickShopId', catchAsync(async (req, res) => {
    const { collectionId, kickShopId } = req.params;
    let pattern;
    const kick = await Kick.findOne({ shopId: kickShopId }).populate('colection');

    const kicks = await Kick.find({}).populate('colection')
    if (kickShopId >= 69001 && kickShopId <= 69004) {
        pattern = 'pattern1.png';
    }
    if (kickShopId >= 69005 && kickShopId <= 69008) {
        pattern = 'pattern2.png';
    }
    if (kickShopId >= 69009 && kickShopId <= 69012) {
        pattern = 'pattern3.png';
    }

    res.render('kicks/show', { kick, kicks, kickShopId, pattern })
}))

app.get('/faq', (req, res) => {
    res.render('faq')
})

app.get('/shop/collections', catchAsync(async (req, res) => {
    const collections = await Collection.find({});
    console.log(collections)
    res.render('kicks/collections', { collections })
}))

app.get('/error', (req, res) => {
    chicken.fly();
})

app.post('/newsletter', (req, res) => {
    const { emailNewsletter } = req.body;
    res.send(`${emailNewsletter}`)
})

app.post('/shop/collections/:collectionId/:shopId/buy', catchAsync(async (req, res) => {

    let { shopId, date, size } = req.body.item
    date = date.slice('0', '21');
    let newKick = await Kick.findOne({ shopId: shopId });
    newKick.size = size;
    newKick.date = date;
    if (!req.session.cart) {
        req.session.cart = [];
        req.session.cart.push(newKick);
    } else {
        req.session.cart.push(newKick);
    }
    req.flash('success', `Успешно добави ${newKick.name} в кошницата!`)
    res.redirect('back');
}));

app.post('/shop/collections/:collectionId/:shopId/add', catchAsync(async (req, res) => {
    res.send('wow')
}));

app.get('/register', (req, res) => {
    if (req.user) {
        req.logout();
    }
    res.render('users/register')
})

app.post('/register', catchAsync(async (req, res) => {
    try {
        const { email, username, password } = req.body.newAccount;
        let newsletter;
        if (req.body.newAccount.newsletter == 'on') {
            newsletter = true;
        } else {
            newsletter = false;
        }
        const user = new User({ email, username, newsletter });
        const registeredUser = await User.register(user, password);
        req.flash('success', 'You successfully made an account. Now log in!')
        res.redirect('/register')
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('#reg')
    }
}));

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/register' }), (req, res) => {
    const redirectUrl = '/';
    res.redirect(redirectUrl);
})

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})


app.get('/seeds/orders/new', isLoggedIn, catchAsync(async (req, res) => {
    const currentUser = res.locals.currentUser;
    const details =
    {
        status: 'pending',
        user: currentUser._id,
        anonymous: false,
        kicks: ['608f11bff52c6b3a44d3fb59', '608f11bff52c6b3a44d3fb5a'],
        firstName: currentUser.firstName || 'Теодор',
        lastName: currentUser.lastName || 'Василев',
        phone: '0890136562',
        area: currentUser.area || 'София',
        city: currentUser.city || 'София',
        address: currentUser.address || 'бул. Княз Дондуков 25',
        neighbourhood: currentUser.neighbourhood || 'Център'
    }
    const order = new Order(details);
    await order.save().then(res => console.log(res));
}));

app.get('/seeds/codes', catchAsync(async (req, res) => {
    const codes = [
        'PROMO',
        '4YP98',
        'B0M2J',
        'O9UBG',
        'ZBV4X',
    ];
    const newCode1 = new Code({ code: 'PROMO', discount: 10, active: false })
    const newCode2 = new Code({ code: '4YP98', discount: 10, active: false })
    const newCode3 = new Code({ code: 'B0M2J', discount: 10, active: false })
    const newCode4 = new Code({ code: 'O9UBG', discount: 10, active: false })
    const newCode5 = new Code({ code: 'ZBV4X', discount: 10, active: false })
    await newCode1.save().then(res => console.log(res));
    await newCode2.save().then(res => console.log(res));
    await newCode3.save().then(res => console.log(res));
    await newCode4.save().then(res => console.log(res));
    await newCode5.save().then(res => console.log(res));
}));

app.get('/personal/profile', isLoggedIn, catchAsync(async (req, res) => {
    console.log(res.locals.currentUser);
    console.log(req.user)
    const user = await User.findOne({ _id: res.locals.currentUser._id }).populate({
        path: 'orders',
        model: 'Order',
        populate: {
            path: 'kicks',
            model: 'Kick'
        }
    })


    res.render('users/profile', { user });
}));


app.post('/personal/profile/data', isLoggedIn, catchAsync(async (req, res) => {
    const { firstName, lastName, email, address, city, area, phone } = req.body;
    console.log(email + res.locals.currentUser.email)
    let update = {};
    if (email == req.user.email) {
        update = { firstName, lastName, address, city, area, phone };
    } else {
        update = { firstName, lastName, email, address, city, area, phone };
    }

    let updatedUser = await User.findOneAndUpdate({ _id: req.user._id }, update, { new: true });
    update = {};
    console.log(updatedUser);
    res.send(updatedUser);
}));


app.post('/personal/profile/promoCode', isLoggedIn, catchAsync(async (req, res) => {
    const { promoCode } = req.body;
    if (promoCode) {
        const tryCode = await Code.findOne({ code: promoCode });
        if (tryCode) {
            if (!tryCode.active) {
                const user = await User.findOne({ _id: req.user._id });
                user.discount = tryCode.discount;
                tryCode.user = user._id;
                tryCode.active = true;
                await tryCode.save().then(res => console.log(res));
                await user.save().then(res => console.log(res));
            } else {
                res.send('code already in use!');
            }
        } else {
            res.send('invalid promocode');
        }
    } else {
        res.send('enter a promo code');
    }
}));


app.get('/cart', catchAsync(async (req, res) => {
    console.log(req.session.cart)
    res.render('cart/cart');
}));

app.post('/cart', catchAsync(async (req, res) => {
    const { index } = req.body;
    req.session.cart.splice(index, 1);
    res.redirect('/cart');
}));

app.get('/cart/checkout', catchAsync(async (req, res) => {
    if (req.session.cart.length > 1) {
        res.render('cart/checkout');
    } else {
        res.redirect('/cart')
    }
}));

app.get('/cart/checkout/finish/:id', catchAsync(async (req, res) => {
    const id = req.params.id;
    const order = await Order.findOne({ orderId: id });
    if (order) {
        res.render('cart/finish', { order });
    } else {
        res.redirect('/');
    }

}));


app.post('/cart/checkout', catchAsync(async (req, res) => {
    const { email, firstName, lastName, city, address, phone, newsletter, additionalInfo } = req.body;
    let { date } = req.body;
    let orderIDMATH = Math.random().toString(36).substr(2, 9);

    if (req.user) {

    }

    date = date.slice('0', '21');
    let kicks = [], sizes = [];
    for (let i = 0; i < req.session.cart.length; i++) {
        kicks.push(req.session.cart[i]._id);
        sizes.push(req.session.cart[i].size);
    }



    const details =
    {
        orderId: orderIDMATH,
        status: 'pending',
        user: req.user || null,
        email: email,
        kicks: kicks,
        price: res.locals.cartTotal,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        city: city,
        address: address,
        date: date,
        sizes: sizes,
        additionalInfo: additionalInfo
    }
    const order = new Order(details);
    if (req.user) {

        const user = await User.findOne({ _id: req.user._id });

        if (!req.user.firstName) {
            user.firstName = firstName;
        }

        if (!req.user.lastName) {
            user.lastName = lastName;
        }

        if (!req.user.city) {
            user.city = city;
        }

        if (!req.user.address) {
            user.address = address;
        }

        if (!req.user.phone) {
            user.phone = phone;
        }

        user.orders.push(order);
        await user.save().then(res => console.log(res));
    }
    await order.save().then(res => console.log(res));
    req.session.cart = null;
    res.redirect(`/cart/checkout/finish/${orderIDMATH}`)
}));








app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(status).render('error', { err })
})


app.listen(PORT, () => {
    console.log('Listening on port 3000')
})