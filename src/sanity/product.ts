
        export default {
            name: 'product',
            type: 'document',
            title: 'Product',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'Name',
                },
                {
                    name: 'description',
                    type: 'text',
                    title: 'Description',
                },
                {
                    name: 'price',
                    type: 'number',
                    title: 'Price',
                },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        };
        






  