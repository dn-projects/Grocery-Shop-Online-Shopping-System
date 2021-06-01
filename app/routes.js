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

    // create item and send back all items after creation
    app.post('/api/stock', function (request, response)
    {
        // create a item, information comes from AJAX request from Angular
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

    // delete a item
    app.delete('/api/stock', function (request, response) {
        Stock.remove({
            _id: request.params.item_id
        }, function (error, item) {
            if (error)
                response.send(error);

            getItems(response);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (request, response) {
        response.sendFile(__dirname + 'adminSystem.html#/stock');
        // load the single view file (angular will handle the page changes on the front-end)
    });
};
