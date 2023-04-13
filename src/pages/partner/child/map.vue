<!--
 Page: map.vue [126914]
 From: 2023-04-04 15:26:42 Ywr
 Remark: 山东地图
-->
<template>
  <div class="sn-page map-style" :style="{'background-image': backgroundImage}">
    <!-- 标题 -->
    <img class="head" src="../../../../static/partner/head/map.png" alt="">

    <!-- 数据 -->
    <div class="sn-f-e-c data-box" v-show="!showCity">
      <!-- 左侧地图 -->
      <div ref="ShanDongDom"></div>

      <!-- 右侧数据 -->
      <div class="list-box">
        <ul>
          <li class="sn-f-e-c" v-for="(obj, i) in wheatList" :key="i">
            <img src="../../../../static/partner/map/wheat-left.png" alt="">
            <div class="sn-f-col-b-c">
              <p>{{ obj.num }}</p>
              {{ obj.name }}
            </div>
            <img src="../../../../static/partner/map/wheat-right.png" alt="">
          </li>
        </ul>
      </div>
    </div>

    <!-- 数据 -->
    <div class="sn-f-s-c city-cont" v-show="showCity">
      <!-- 左侧地图 -->
      <div @click="funHiddenCity">
        <div ref="CityDom"></div>
      </div>

      <!-- 右侧数据 -->
      <div class="list-box">
        <ul class="sn-f-s-c">
          <li class="sn-f-s-c" v-for="(obj, i) in cityList" :key="i">
            <div class="icon"></div>
            <div class="name">{{ obj.name }}</div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script type="text/javascript">
import * as echarts from 'echarts';
import * as constants from '../../../common/utils/constants';
// import shandongJson from '../../../../static/js/echarts/map/shandong.json';
import shandongJson from '../../../../static/js/echarts/alimap/shandong.json';

export default {
  name: 'ShanongMap',
  data() {
    return {
      ShanDongDom: null, // 山东省地图Dom
      ShanDongEchart: null, // 山东省地图实例
      showCity: false, // 展示市区
      CityEchart: null, // 市区地图
      CityDom: null, // 市区地图Dom
      Constants: constants, // 静态路径
      backgroundImage: `url("${require('../../../../static/partner/bg/map.png')}")`, // 背景图
      wheatList: [ // 麦穗区数据
        {
          num: 28,
          name: '患者数量'
        },
        {
          num: 28,
          name: '医疗合作单位'
        },
        {
          num: 28,
          name: '合作伙伴'
        }
      ],
      MetaList: [ // 市区医院数据
        {
          name: '山东大学齐鲁儿童医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学齐鲁儿童医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        },
        {
          name: '山东大学省立医院'
        }
      ],
      cityList: [], // 医院列表
      styleObj: { // 地图样式
        color: this.$sn.color.white,
        areaColor: { // 地图色
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: this.$sn.color.blue12 // 100% 处的颜色
            },
            {
              offset: 1,
              color: this.$sn.color.blue13 // 0% 处的颜色
            }
          ]
        }
      }
    };
  },

  computed: {
    // 可视区域高宽
    whObj() {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const ftSize = width / 1920; // 字体
      return {
        width,
        height,
        ftSize
      };
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.ShanDongDom = this.$refs.ShanDongDom;
      this.CityDom = this.$refs.CityDom;
      this.funDrawingShanDong();
    });
  },

  methods: {
    /*
    * 2023-04-07 09:39:47 Ywr
    * 山东省地图
    */
    funDrawingShanDong() {
      const airData = [];
      const width = this.whObj.width * (0.6274);
      const height = this.whObj.height * (0.66648);
      this.ShanDongEchart = echarts.init(this.ShanDongDom, 'dark', {
        width,
        height
      });

      const res = Object.assign({}, shandongJson);
      echarts.registerMap('shandongMap', res);
      res.features.forEach((el, i) => {
        airData.push(
          {
            name: el.properties.name,
            index: i
          }
        );
      });

      const option = {
        backgroundColor: 'transparent', // 背景透明
        geo: {
          type: 'map', // 类型
          map: 'shandongMap', // 地图名称
          roam: false, // 允许缩放、拖动
          zoom: 1.2, // 默认缩放比例
          label: {
            left: 'left',
            show: true, // 展示标签
            fontSize: this.whObj.ftSize * 18,
            color: this.$sn.color.white2
          },
          itemStyle: this.styleObj,
          emphasis: {
            label: {
              left: 'left',
              show: true, // 展示标签
              fontSize: this.whObj.ftSize * 22,
              color: this.$sn.color.blue12
            },
            itemStyle: this.styleObj
          },
          select: {
            label: {
              show: true, // 展示标签
              fontSize: this.whObj.ftSize * 18,
              color: this.$sn.color.white
            },
            itemStyle: this.styleObj
          }
        },

        series: [
          {
            // showLegendSymbol: true,
            data: airData,
            geoIndex: 0, // 将空气质量的数据和第0个geo配置关联在一起
            type: 'map',
            selectedMode: 'single'
          }
        ]
      };

      this.ShanDongEchart.setOption(option);

      this.funBindClick();
    },

    /*
    * 2023-04-10 13:48:35 Ywr
    * 省级地图绑定点击事件
    */
    funBindClick() {
      // 点击市区事件
      this.ShanDongEchart.on('click', (params) => {
        // 显示城市
        this.showCity = true;
        this.cityList = [...this.MetaList].splice(0, params.data.index + 5);
        this.$sn.assembly.loading(true);
        // 移除省级点击事件
        this.ShanDongEchart.off('click');
        this.CityEchart && this.CityEchart.clear();
        // 绘制市区地图
        setTimeout(() => {
          this.funDrawingCity(params.data.index);
        }, 4);
      });
    },

    /*
    * 2023-04-07 17:23:33 Ywr
    * 城市地图
    */
    funDrawingCity(index) {
      console.log(index);
      // 名称遮挡 中心点
      const offsetArr = [
        [0, 0],
        [30, -20],
        [0, 20],
        [0, -30],
        [-30, 20],

        [0, 0],
        [0, 40],
        [0, 0],
        [0, 0],
        [0, 0],

        [-56, 10],
        [-60, 10],
        [0, 30], // 12

        [0, 48], // 13
        [0, 40],
        [0, 10]
      ];
      const offset = offsetArr[index];
      const width = this.whObj.width * (655 * 100 / 192000);
      const height = this.whObj.height * (655 * 100 / 108000);
      this.CityEchart = echarts.init(this.CityDom, 'dark', {
        width,
        height
      });
      let res = { ...shandongJson };
      res = {
        features: [res.features[index]],
        type: 'FeatureCollection'
      };
      const centerArr = res.features[0].properties.center;

      echarts.registerMap('CityMapName', res);

      const option = {
        backgroundColor: 'transparent',
        geo: {
          type: 'map', // 类型
          map: 'CityMapName', // 地图名称
          roam: false, // 允许缩放、拖动
          zoom: 1.2, // 默认缩放比例
          label: {
            offset: offset,
            show: true, // 展示标签
            fontSize: this.whObj.ftSize * 42,
            color: this.$sn.color.white2
          },
          itemStyle: this.styleObj,
          emphasis: {
            label: {
              show: true, // 展示标签
              fontSize: this.whObj.ftSize * 42,
              color: this.$sn.color.blue12
            },
            itemStyle: this.styleObj
          },
          select: {
            label: {
              show: true, // 展示标签
              fontSize: this.whObj.ftSize * 42,
              color: this.$sn.color.white
            },
            itemStyle: this.styleObj
          }
        },

        xAxis: {
          show: false,
          type: 'value',
          scale: true // 缩放： 脱离0值比例
        },
        yAxis: {
          show: false,
          type: 'value',
          scale: true // 缩放： 脱离0值比例
        },

        series: [
          {
            geoIndex: 0, // 将空气质量的数据和第0个geo配置关联在一起
            type: 'map',
            selectedMode: 'single'
          },
          {
            type: 'effectScatter',
            showEffectOn: 'render', // render emphasis
            rippleEffect: {
              scale: 2
            },
            data: [centerArr],
            symbolSize: this.whObj.ftSize * 22,
            itemStyle: {
              color: this.$sn.color.green1
            }
          }
        ]
      };
      this.CityEchart.setOption(option);
      this.$sn.assembly.loading(false);
    },

    /*
    * 2023-04-07 17:46:29 Ywr
    * 点击地图
    */
    funHiddenCity() {
      this.showCity = false;
      this.$nextTick(() => {
        // 省级地图绑定点击市区事件
        this.funBindClick();
      });
    }
  }
};
</script>

<style lang="scss">
.map-style {
  background-size: cover;
  background-repeat: no-repeat;

  .head {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 430px;
    height: 136px;
  }

  .data-box {
    width: 100%;

    .list-box {
      margin-right: 205px;
      // margin-left: 183px;
      margin-left: 83px;

      ul {
        li {
          font-size: 32px;
          line-height: 48px;
          font-weight: 400;
          color: $white;
          align-items: flex-end;
          margin-bottom: 36px;

          img {
            width: 71px;
            height: 125px;
          }

          div {
            width: 304px;

            p {
              font-size: 107px;
              line-height: 160.5px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }

  .city-cont {
    width: 100%;
    margin-top: 27px;
    margin-left: 150px;
    // margin-top: 54px;
    // align-items: flex-start;

    .list-box {
      // margin-left: 176px;
      margin-left: 200px;
      max-height: 660px;
      overflow-y: scroll;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        display: none;
      }

      ul {
        width: 920px;
        flex-wrap: wrap;

        li {
          margin-bottom: 20px;
          margin-right: 51px;

          .name {
            width: 360px;
            font-size: 32px;
            line-height: 48px;
            font-weight: 400;
            color: $white;
          }

          .icon {
            width: 25px;
            height: 25px;
            background: $lineargradient7;
            border: 1px solid $blue11;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
