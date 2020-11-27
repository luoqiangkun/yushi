<template>
    <el-collapse class="category-aside" v-model="activeName" accordion>
        <el-collapse-item name="1">
            <h3 slot="title" class="category-title">
                售后问题
            </h3>
            <ul class="category-row">
                <li class="category-item">
                    <router-link to="/help/lists/1">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/2">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/3">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/4">付款码支付接入方法指引</router-link>
                </li>
            </ul>
        
        </el-collapse-item>
        
         <el-collapse-item name="2">
            <h3 slot="title" class="category-title">
                售后问题售后
            </h3>
            <ul class="category-row">
                <li class="category-item">
                    <router-link to="/help/lists/1">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/2">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/3">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/4">付款码支付接入方法指引</router-link>
                </li>
            </ul>
        
        </el-collapse-item>

        <el-collapse-item name="3">
            <h3 slot="title" class="category-title">
                售后问题
            </h3>
             <ul class="category-row">
                <li class="category-item">
                    <router-link to="/help/lists/1">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/2">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/3">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/4">付款码支付接入方法指引</router-link>
                </li>
            </ul>
        
        </el-collapse-item>

        <el-collapse-item name="4">
            <h3 slot="title" class="category-title">
                售后问题与现实
            </h3>
            <ul class="category-row">
                <li class="category-item">
                    <router-link to="/help/lists/1">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/2">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/3">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/4">付款码支付接入方法指引</router-link>
                </li>
            </ul>
        
        </el-collapse-item>

        <el-collapse-item name="5">
            <h3 slot="title" class="category-title">
                与现实生活一致
            </h3>
             <ul class="category-row">
                <li class="category-item">
                    <router-link to="/help/lists/1">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/2">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/3">付款码支付接入方法指引</router-link>
                </li>
                <li class="category-item">
                    <router-link to="/help/lists/4">付款码支付接入方法指引</router-link>
                </li>
            </ul>
        
        </el-collapse-item>

    </el-collapse>
</template>
<script>
export default {
    data(){
        return {
            activeName:'1'
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.category-aside {
    width: 250px;
    text-align: left;
    border: solid 1px #e6e6e6;
    background: #fff;
}
.category-aside .category-title {
    padding: 0 20px;
}
.category-aside .category-row {
    background-color: #fafafa;
    padding: 10px 35px;
}
.category-aside .category-row .category-item {
    font-size: 14px;
    line-height: 35px;
}
</style>