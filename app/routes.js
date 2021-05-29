var Item = require('./models/item');

function getItems(response)
{
    Item.find(function (error, items)
    {
        if (error)
        {
            response.send(error);
        }
        response.json(items);
    });
};

// API ----------------------------------------------------------------------

module.exports = function (app)
{
    app.get('/api/items', function (request, response)
    {
        getItems(response);
    });

    // create item and send back all items after creation
    app.post('/api/items', function (request, response)
    {
        // create a item, information comes from AJAX request from Angular
        Item.create
        (
            {
                text: request.body.text, done: false
            },
            function (error, item)
            {
                if (error)
                    response.send(error);

                // get and return all the items after you create another
                getItems(response);
            }
        );

    });

    // delete a item
    app.delete('/api/items/:item_id', function (request, response) {
        Item.remove({
            _id: request.params.item_id
        }, function (error, item) {
            if (error)
                response.send(error);

            getItems(response);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (request, response) {
        response.sendFile(__dirname + '/public/index.html');
        // load the single view file (angular will handle the page changes on the front-end)
    });
};
