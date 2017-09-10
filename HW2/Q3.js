// Fix the slow function to be asynchronous/non­blocking
function slow(callback){
    setImmediate(function() {
        for (let i = 0; i < 5e8; i++) {
            if (i == 5e8 - 1) {
                console.log("completed loop " + i);
            }
        }
    });
    process.nextTick(function() {

        console.log("after loop");
        if(Math.random()> 0.5){
            return callback("Error", null);
        }
        callback(null, {id:12345});
    });
};

function exec(fn){
    // Complete the code here to implement chaining with callback
    fn((err, data) => err == "Error" ? fail(err) : done(data));
    function done(data){};
    function fail(err){};

    return{
        done:function(func){
            done = func;
            return this;
        },
        fail:function(func){
            fail = func;
            return this;
        }
    }
};

exec(slow).done(function(data){
        console.log(data);
    }).fail(function(err){ 
        console.log("Error: " + err);
    });