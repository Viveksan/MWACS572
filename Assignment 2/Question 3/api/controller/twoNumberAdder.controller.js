module.exports.numberAdder = function(req, res){
    const num1 = req.params.num1;

    num1=parseInt(num1,10);

    console.log("Number 1: " +num1);
    console.log("Number 2: " +req.query.num2);

    const num2 = 0;

    if(req.query && req.query.num2){
        num2 = parseInt(req.query.num2,10);
    }

    let sum = num1+num2;
    console.log("Sum of the two numbers "+sum);
    res.status(200).json({"number1":num1,"number2":num2,"sum":sum});
}