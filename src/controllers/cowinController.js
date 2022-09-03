let axios = require("axios");

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getBydistrict = async function (req, res) {
    try {
        let district = req.query.districtid
        let date = req.query.date
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}








let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}







let getWeather = async function (req, res) {
    try {
        let city = req.query.cityname
        let appid = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}









let getSortWeather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai"]
        let cityObjArray = []
        for (let i=0; i< cities.length; i++) {
            let obj = { city: cities[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=32cfd5847787d6db6a1047ade05e2b9a`)
            console.log(result.data.main.temp)
            obj.temp=result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const memeHandler=async function(req,res){
    try {
        let template=req.query.tempale_id
        let firstText=req.query.text0
        let secondText=req.query.text1
        let userName=req.query.username
        let password=req.query.password
        let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template}&text0=${firstText}&text1=${secondText}&username=${userName}&password=${password}`
        }
        let result=await axios(options)
        res.status(200).send({data:result.data})
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
        
    }

}
const memeHandlerSearch=async function(req,res){
    try {
        let options={
            method:"get",
            url:`https://api.imgflip.com/get_memes`
        }
        let result=await axios(options)
        res.status(200).send({data:result.data})
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
        
    }

}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getBydistrict = getBydistrict
module.exports.getWeather = getWeather
module.exports.getSortWeather = getSortWeather
module.exports.memeHandler=memeHandler
module.exports.memeHandlerSearch=memeHandlerSearch