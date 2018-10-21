// 引入一个 CSS 模块
import classes from './index.css';

export default () => {
    var myApp = {};
    /**
     * Model 数据处理
     */
    myApp.Model = function (val) {
        var num = 0;
        this.add = function(val) {
            if(num < 100) num += val;
        }
        this.sub = function(val) {
            if(num > 0) num -= val;
        }
        this.getVal = function() {
            return num;
        }

        // 观察者模式 
        var self = this, 
            views = [];

        this.register = function(view) {
            views.push(view);
        };

        this.notify = function() {
            for(var i = 0; i < views.length; i++) {
                views[i].render(self);
            }
        };
    }
    /**
     * View视图层 数据展示
     */
    myApp.View = function(controller) {
        const numInput = $('.numInput'),
                addBtn = $('.addBtn'),
                subBtn = $('.subBtn');
        this.render = function(model) {
            numInput.val(model.getVal());
        }
        addBtn.click(controller.increase);
        subBtn.click(controller.decrease);
    }

    myApp.Controller = function() {
        var model = null,
            view = null;
    
        this.init = function() {
            /* 初始化Model和View */
            model = new myApp.Model();
            view = new myApp.View(this);
    
            /* View向Model注册，当Model更新就会去通知View啦 */
            model.register(view);
            model.notify();
        };
    
        /* 让Model更新数值并通知View更新视图 */
        this.increase = function() {
            model.add(1);
            model.notify();
        };
    
        this.decrease = function() {
            model.sub(1);
            model.notify();
        };
    };

    (function() {
        var controller = new myApp.Controller();
        controller.init();
    })();

};