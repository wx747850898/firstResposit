
export default {

  testLocal1: {
    status: 200,
    message: "",
    //属性cartList的值是一个数组，其中包含3个元素
    "cartList|3": [
      {
        //shopTitle数组按照顺序每次显示下面的一个元素
        "shopTitle|+1": ["寻找田野", "猫咪森林", "老爹果园"],
        //属性shopId是一个Number类型的值，是10000-99999中的一个随机数
        "shopId|10000-99999": 1,
        //属性img是一个字符串类型的，生成的图片是90*90，颜色随机的
        img: "@image(90*90,@color)",
      },
    ],
  },

}
