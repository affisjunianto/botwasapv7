const fs = require('fs')

/**
 * GET db
**/
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))

/**
 * add atm user to db
 * params {string} userid
**/
const addATM = (userid) => {
	const obj = {id: userid, uang : 0}
    uang.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}

/**
 * add money user to db
 * params {string} userid
 * params {number} amount
 * 
**/
const addKoinUser = (userid, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

/**
 * GET xp user from db
 * params {string} userid
 * return {number}
**/
const checkATMuser = (userid) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}

/**
 * pay limit
 * params {string} userid
 * params {number} amount
**/
const bayarLimit = (userid, amount) => {
	let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}
	
/**
 * pick money user for pay limit
 * params {string} userid
 * Params {number} amount
**/
const confirmATM = (userid, amount) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

/**
 * add limit because use feature
 * params {string} userid
**/
const limitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
} 

module.exports = {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
}