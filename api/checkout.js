const stripeAPI = require('./stripe');

async function createCheckoutSession(req, res) {
    const domainUrl = process.env.WEB_APP_URL;
    const { line_items } = req.body;
    if(!line_items) {
        return res.status(400).json({error: 'missing required session parameters' });
    }
    let session;

    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainURL}/canceled`,
            shipping_address_collection: { allowed_countries: ['GB', 'US']}

        });
        res.status(200).json({sessionID: session.id});
    } catch(error){
        console.log(error);
        res.status(400).json({ error: 'an error occured, unable to create session'})
    }
}

module.exports = createCheckoutSession;