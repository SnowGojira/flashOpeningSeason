const fansTest = {
    /*todo: title order should be a fixed <div>, not a dynamic object elements*/
    /*todo: all question parts have to obtain an ranking part in object*/
    'questions': [
        {
            subject: '同学,同学,你饭《明日之子》里哪个小哥哥?',
            opts: [
                'A.独秀赛道我团饭了',
                'B.我最想和斯外戈一起吃饭',
                'C.小哥哥不能吃呀',
            ],
            /*todo: for the best effect, this part should be a fix <div> section*/
            hint: '"饭"=喜欢，"团饭"=全队都喜欢,斯外戈《明日之子》独秀赛道中的一员,明日的小哥哥都很棒!',
            answer: 0
        },{
            'title':'第二题',
            'question': '给《明日之子》的小哥哥应援时,说什么比较好？',
            'answers': [
                'A.条条大路通罗马',
                'B.陪你一起走花路',
                'C.愿你永远走水路',
            ],
            'worning':[
                {
                    'falseTips':'"花路"是大红大紫,一路走红的意思,我们当然要陪小哥哥们"走花路"啦!',
                    'reply':'了解了,学长',
                    'backimg_con_man':'img/scene/zongyi/zongyi_con.png',
                    'backimg_con_wo':'img/scene/zongyi/zongyi_woman_con.png',

                }
            ],
            'correctAnswer': 1
        },
        {
            'title':'第三题',
            'question': '爱豆在《潮音战纪》走心表演,弹幕刷什么好?',
            'answers': [
                'A.xswl',
                'B.一片xfxy',
                'C.实力打call,666',
            ],
            'worning':[
                {
                    'falseTips':'"xswl"=笑死我了,"xfxy"=腥风血雨,指各家粉丝间的争执场面,"666"=非常赞',
                    'reply':'了解了,学长',
                    'backimg_con_man':'img/scene/zongyi/zongyi_con.png',
                    'backimg_con_wo':'img/scene/zongyi/zongyi_woman_con.png',

                }
            ],
            'correctAnswer': 2
        },

        {
            'title':'第四题',
            'question': '为什么最近大家都很爱看《幸福三重奏》？',
            'answers': [
                'A.可能是大家都不幸福吧',
                'B.钢琴三重奏真的优美',
                'C.因为嘉宾都特别zqsg呀',
            ],
            'worning':[
                {
                    'falseTips':'《幸福三重奏》是一档慢综艺节目,记录明星夫妻的家庭状态,嘉宾表现真情实感,简称"zqsg"',
                    'reply':'了解了,学长',
                    'backimg_con_man':'img/scene/zongyi/zongyi_con.png',
                    'backimg_con_wo':'img/scene/zongyi/zongyi_woman_con.png',

                }
            ],
            'correctAnswer': 2
        },			{
            'title':'第五题',
            'question': '本周末去陪爱豆录节目,橙色应援准备起来哟!',
            'answers': [
                'A.好的，去买个橙汁',
                'B.我买了一打橙色荧光笔',
                'C.橙色荧光棒挥起来',
            ],
            'worning':[
                {
                    'falseTips':'"本命"指喜欢的偶像,偶像都有自己的代表色,粉丝用相应颜色的应援物如荧光棒来表示支持',
                    'reply':'了解了,学长',
                    'backimg_con_man':'img/scene/zongyi/zongyi_con.png',
                    'backimg_con_wo':'img/scene/zongyi/zongyi_woman_con.png',

                }
            ],
            'correctAnswer': 2
        }
    ]
};