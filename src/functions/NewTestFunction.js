const { app } = require('@azure/functions');

app.http('NewTestFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`New Test Function Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Test - Hello, ${name}!` };
    }
});
