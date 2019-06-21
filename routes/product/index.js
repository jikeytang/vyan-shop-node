const express = require('express')
const {
  product
} = require('../../app/controller/index')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// 默认路由配置
// http://localhost:9000/product

// router.get('/', function(req, res) {
//   res.send('Birds home page');
// });


// 添加商品信息 
router.route('/addItem').post(product.addProductItem).get((req, res) => {
  return res.json({
    description: "用于添加商品信息",
    parameter: {
      brandName: {
        type: "String",
        required: "true",
        description: "品牌名"
      },
      publishStatus: {
        type: "Boolean",
        required: "true",
        description: "上架状态"
      },
      verifyStatus: {
        type: "Boolean",
        required: "true",
        description: "审核状态"
      },
      pic: {
        type: "String",
        require: "true",
        description: "商品图片地址"
      },
      name: {
        type: "String",
        required: "true",
        description: "商品名称"
      },
      price: {
        type: "String",
        required: "true",
        description: "价格"
      },
      productSn: {
        type: "String",
        required: "true",
        description: "货号"
      },
      sort: {
        type: "String",
        required: "true",
        description: "排序"
      }
    }

  })
})
// 删除商品信息 
router.route('/removeItem').post(product.removeProducItem).get((req, res) => {
  return res.json({
    description: "用于删除商品信息",
    parameter: {
      id: {
        type: "String or Array",
        required: "true",
        description: "商品信息的唯一ID"
      }
    }
  })
})
// 修改商品信息 
router.post('/updatedItem', product.updatedProducItem).get((req, res) => {
  return res.json({
    description: "用于修改商品信息",
    parameter: {
      id: {
        type: "String",
        required: "true",
        description: "商品信息的唯一ID"
      }
    }
  })
})
// 查询商品列表 
router.route('/list').post(product.getProductList).get((req, res) => {
  return res.json({
    description: "用于查询商品列表",
    parameter: {
      name: {
        type: "String",
        required: "false",
        description: "商品名称"
      },
      productSn: {
        type: "String",
        required: "false",
        description: "货号"
      },
      brandName: {
        type: "String",
        required: "false",
        description: "品牌名"
      },
      publishStatus: {
        type: "Boolean",
        required: "false",
        description: "上架状态"
      },
      verifyStatus: {
        type: "Boolean",
        required: "false",
        description: "审核状态"
      }
    }
  })
})
module.exports = router