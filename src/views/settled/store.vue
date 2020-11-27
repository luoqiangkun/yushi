<template>
    <div class="main-content">
        <el-alert
            title="准确填写牌匾名、地址和类目，市场经理会尽快联系您"
            type="warning"
            show-icon>
        </el-alert>

        <el-steps :active="1" simple>
            <el-step title="店铺信息" icon="el-icon-s-shop"></el-step>
            <el-step title="资质信息" icon="el-icon-c-scale-to-original"></el-step>
            <el-step title="法人信息" icon="el-icon-s-custom"></el-step>
        </el-steps>
        <el-form ref="form" :model="form" :rules="rules" label-width="130px" label-position="left">
            <el-form-item label="店铺门匾名称" prop="storeName">
                <el-input class="width-400" v-model="form.storeName"></el-input>
            </el-form-item>
            <el-form-item label="店铺经营分类" prop="storeCategory">
                <el-select class="width-400" v-model="form.storeCategory" placeholder="请选择经营分类">
                  <el-option label="美食饮品" value="1"></el-option>
                  <el-option label="超市百货" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="门店联系人" prop="storeContactPerson">
                <el-input class="width-400" v-model="form.storeContactPerson" placeholder="请填写门店联系人"></el-input>
            </el-form-item>
            <el-form-item label="门店联系方式" prop="storeContactNumber">
                <el-input class="width-400" v-model="form.storeContactNumber" placeholder="请填写门店联系方式"></el-input>
            </el-form-item>
            <el-divider></el-divider>

            <el-form-item label="门店区域" prop="storeDiscrict">
                <el-cascader
                    class="width-400"
                    :options="options"
                    v-model="form.storeDiscrict"
                >
                </el-cascader>
            </el-form-item>
           <el-form-item label="门店详细地址" prop="storeAddress">
                <el-input class="width-400" v-model="form.storeAddress" placeholder="请填写门店详细地址"></el-input>
            </el-form-item>
            <el-form-item label="门店经纬度">
                <baidu-map class="bm-view" :center="map.center" :zoom="map.zoom" @ready="initMap"></baidu-map>
            </el-form-item>
            <el-divider></el-divider>

            <el-form-item label="门店门脸照">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                >
                <i class="el-icon-plus"></i>
                <div slot="tip" class="el-upload__tip">需拍出完整牌匾、门框（建议正对店铺2米处拍摄）</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="门店店内环境照">
                <el-upload
                    class="test"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                >
                <div slot="tip" class="el-upload__tip">需真实反映用餐环境，拍摄整体就餐区域，请勿局部拍摄桌椅</div>
                <i class="el-icon-plus"></i>
                
                </el-upload>
            </el-form-item>
           
            <el-divider></el-divider>

            <el-form-item>
               <el-button type="primary" @click="onSubmit">下一步</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, { 
  ak: 'Yi9XWlwa7sUGSuKGDiPBrS261bMeu6YF'
})
  export default {
    data() {
      return {
        rules: {
          storeName: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          storeCategory: [
            { required: true, message: '请选择店铺分类', trigger: 'change' }
          ],
          storeContactPerson: [
             { required: true, message: '请填写店铺联系人', trigger: 'blur' }
          ],
          storeContactNumber: [
             { required: true, message: '请填写店铺联系方式', trigger: 'blur' }
          ],
          storeDiscrict: [
             { required: true, message: '请选择店铺省市区', trigger: 'change' }
          ],
          storeAddress: [
             { required: true, message: '请填写店铺详细地址', trigger: 'blur' }
          ],
          storeDoorPhoto: [
            { required: true, message: '请上传店铺门脸照片', trigger: 'change' }
          ],
          storeInsidePhoto: [
            { required: true, message: '请上传店内环境照片', trigger: 'change' }
          ]
        },
        form: {
          storeName: '',
          storeCategory: '',
          storeContactPerson: '',
          storeContactNumber: '',
          storeDiscrict: '',
          storeAddress: '',
          storeDoorPhoto: '',
          storeInsidePhoto: '',
          storeLongitude:'',
          storeLatitude:''
        },
        map:{
          center: {
            lng: 109.45744048529967,
            lat: 36.49771311230842
          },
          zoom: 13,
        },
        options: [
          {
            value: "zhinan",
            label: "指南",
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                  {
                    value: "yizhi",
                    label: "一致",
                  },
                  {
                    value: "fankui",
                    label: "反馈",
                  },
                  {
                    value: "xiaolv",
                    label: "效率",
                  },
                  {
                    value: "kekong",
                    label: "可控",
                  },
                ],
              },
              {
                value: "daohang",
                label: "导航",
                children: [
                  {
                    value: "cexiangdaohang",
                    label: "侧向导航",
                  },
                  {
                    value: "dingbudaohang",
                    label: "顶部导航",
                  },
                ],
              },
            ],
          },
          {
            value: "zujian",
            label: "组件",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "layout",
                    label: "Layout 布局",
                  },
                  {
                    value: "color",
                    label: "Color 色彩",
                  },
                  {
                    value: "typography",
                    label: "Typography 字体",
                  },
                  {
                    value: "icon",
                    label: "Icon 图标",
                  },
                  {
                    value: "button",
                    label: "Button 按钮",
                  },
                ],
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio 单选框",
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox 多选框",
                  },
                  {
                    value: "input",
                    label: "Input 输入框",
                  },
                  {
                    value: "input-number",
                    label: "InputNumber 计数器",
                  },
                  {
                    value: "select",
                    label: "Select 选择器",
                  },
                  {
                    value: "cascader",
                    label: "Cascader 级联选择器",
                  },
                  {
                    value: "switch",
                    label: "Switch 开关",
                  },
                  {
                    value: "slider",
                    label: "Slider 滑块",
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker 时间选择器",
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker 日期选择器",
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker 日期时间选择器",
                  },
                  {
                    value: "upload",
                    label: "Upload 上传",
                  },
                  {
                    value: "rate",
                    label: "Rate 评分",
                  },
                  {
                    value: "form",
                    label: "Form 表单",
                  },
                ],
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table 表格",
                  },
                  {
                    value: "tag",
                    label: "Tag 标签",
                  },
                  {
                    value: "progress",
                    label: "Progress 进度条",
                  },
                  {
                    value: "tree",
                    label: "Tree 树形控件",
                  },
                  {
                    value: "pagination",
                    label: "Pagination 分页",
                  },
                  {
                    value: "badge",
                    label: "Badge 标记",
                  },
                ],
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert 警告",
                  },
                  {
                    value: "loading",
                    label: "Loading 加载",
                  },
                  {
                    value: "message",
                    label: "Message 消息提示",
                  },
                  {
                    value: "message-box",
                    label: "MessageBox 弹框",
                  },
                  {
                    value: "notification",
                    label: "Notification 通知",
                  },
                ],
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "NavMenu 导航菜单",
                  },
                  {
                    value: "tabs",
                    label: "Tabs 标签页",
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb 面包屑",
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown 下拉菜单",
                  },
                  {
                    value: "steps",
                    label: "Steps 步骤条",
                  },
                ],
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog 对话框",
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip 文字提示",
                  },
                  {
                    value: "popover",
                    label: "Popover 弹出框",
                  },
                  {
                    value: "card",
                    label: "Card 卡片",
                  },
                  {
                    value: "carousel",
                    label: "Carousel 走马灯",
                  },
                  {
                    value: "collapse",
                    label: "Collapse 折叠面板",
                  },
                ],
              },
            ],
          },
          {
            value: "ziyuan",
            label: "资源",
            children: [
              {
                value: "axure",
                label: "Axure Components",
              },
              {
                value: "sketch",
                label: "Sketch Templates",
              },
              {
                value: "jiaohu",
                label: "组件交互文档",
              },
            ],
          },
        ],
      }
    },
    methods: {
        initMap({BMap, map}) {
            this.map = map;
            // 初始化地图,设置中心点坐标
            var point = new BMap.Point(119.80250895, 25.48905564);
            map.centerAndZoom(point, 14);
            // 添加鼠标滚动缩放
            map.enableScrollWheelZoom();
        },
        onSubmit() {
          this.$refs.form.validate((valid) => {
            if (valid) {
              this.$router.push("qualification");
            } else {
              return false;
            }
          });
        }
    }
  }
</script>

<style scoped>
.width-400 {
    width: 400px;
}
.main-content {
    padding: 0 50px;
    text-align: left;
}
.main-content .el-alert {
    padding: 14px 16px;
    margin-bottom: 20px;
}
.main-content .el-steps {
    margin-bottom: 20px;
}
.bm-view {
    width: 700px;
    height: 350px;
}

</style>