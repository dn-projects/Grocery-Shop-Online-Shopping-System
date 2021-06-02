var Stock = require('./models/stock');

function getStock(response)
{
    Stock.find(function (error, stock)
    {
        if (error)
        {
            response.send(error);
        }
        response.json(stock);
    });
};

// API ----------------------------------------------------------------------

module.exports = function (app)
{
    app.get('/api/stock', function (request, response)
    {
        getStock(response);
    });

    app.post('/api/stock', function (request, response)
    {
        Stock.create
        (
            {
                stockName: request.body.name.text,
                stockPrice: request.body.price.text,
                stockPicture: request.body.picture.text,
                stockDescription: request.body.description.text,
            },
            function (error, stock)
            {
                if (error)
                {
                    response.send(error);
                }
                getStock(response);
            }
        );
    });

    app.delete('/api/stock/:stock_id', function (request, response) {
        Stock.remove({
            _id: request.params.stock_id
        }, function (error, item) {
            if (error)
                response.send(error);

            getStock(response);
        });
        console.log('ID:',request);
    });

    // application -------------------------------------------------------------
    app.get('*', function (request, response) {
        response.sendFile(__dirname + 'adminSystem.html#/stock');
        // load the single view file (angular will handle the page changes on the front-end)
    });
};
