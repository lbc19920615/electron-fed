
/**
 * 异步调用主函数
 * @param ipc
 * @param channel
 * @param param
 * @returns {Promise<unknown>}
 */
const callMain = (ipc, channel, param) => {
    return new Promise((resolve) => {
        // 声明渲染进程函数, 用于主进程函数回调, 返回数据
        // 调用主进程函数
        ipc.send(channel, param)
        ipc.once(channel, (event, result) => {
            resolve(result)
        })
    })
}

module.exports = {
    callMain
}