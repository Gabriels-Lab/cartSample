
    mainApp.factory("ProductService", function(){
        function Product(priority, order){
            this.img = "default";
            this.order = order;
            this.price = "$49.99";
            this.originalPrice = "$69.99";
            this.discount = "72%";
            this.origin = "Amazon";
            this.shippingPrice = "Free Shipping";
            this.state = "New";
            this.timeLeft = "00:02:29";
            this.description = "Lorem ipsum dolor sit amet, "+
            "consectetur adipiscing elit."+
            "Donec volutpat, tellus ut mattis dapibus,"+
            "tortor neque scelerisque est,"+
            "vel semper lacus nunc eget lorem."+
            "Pellentesque vestibulum risus odio,"+
            "nec tristique mi auctor non.";
            this.priority = priority ? priority : "normal";
        }
    
        function generateProducts(amount){
            var groupName = 0;
            var products = {};
            var order = 0;
            if(typeof(amount) === 'number'){
                    for(var i =0; i < amount; i++){
                        if(i%5 === 0){
                            groupName++;
                            order = 0;
                            products[groupName] = [];
                            products[groupName].push(new Product("important", order));
                        }else{
                            order++;
                            products[groupName].push(new Product(null, order));
                        }
                    }
                }
            return products;
            }
            
        function fnGetProducts(){
            return generateProducts(15);
        }

        return{
            getProducts: fnGetProducts
        }
    });
