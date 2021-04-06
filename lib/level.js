const fs = require('fs')

/**
 * GET file db
**/
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))

/**
 * GET xp user from db
 * params {string} userid
 * return {number}
**/
const getLevelingXp = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}

/**
 * GET level user from db
 * params {string} userid
 * return {number}
**/
const getLevelingLevel = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}

/**
 * GET id user from db
 * params {string} userid
 * return {string}
**/
const getLevelingId = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].id
    }
}

/**
 * add Xp user
 * params {string} userid
 * params {number} amount
**/
const addLevelingXp = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

/**
 * add level user
 * params {string} userid
 * params {number} amount
**/
const addLevelingLevel = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

/**
 * GET xp user from db
 * params {string} userid
**/
const addLevelingId = (userid) => {
    const obj = {id: userid, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}

module.exports = {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
}