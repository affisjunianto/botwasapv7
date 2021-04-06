const fs = require('fs')

/**
 * db
**/
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))

/**
 * Add AFK user.
 * param {string} userId 
 * param {string} time 
 * param {string} reason 
 */
const addAfkUser = (userId, time, reason) => {
    const obj = { id: userId, time: time, reason: reason }
    _afk.push(obj)
    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
}

/**
 * Check if user is on AFK state.
 * param {string} userId 
 * returns {boolean}
 */
const checkAfkUser = (userId) => {
    let status = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Get user AFK reason.
 * param {string} userId 
 * returns {string}
 */
const getAfkReason = (userId) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].reason
    }
}

/**
 * Get user AFK time.
 * param {string} userId 
 * returns {string}
 */
const getAfkTime = (userId) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].time
    }
}

/**
 * Get user AFK ID.
 * param {string} userId 
 * returns {string}
 */
const getAfkId = (userId) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].id
    }
}

/**
 * Get user AFK index position.
 * param {string} userId 
 * returns {number}
 */
const getAfkPosition = (userId) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            position = i
        }
    })
    return position
}

const afkDel = (userid) =>{
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === userId) {
            _afk.splice(i, 1)
            fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
        }
    })
}

module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition,
    afkDel
}