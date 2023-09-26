const app = Vue.createApp({
    mixins: Object.values(mixins),
    data() {
        return {
            loading: true,
            hiddenMenu: false,
            showMenuItems: false,
            menuColor: false,
            scrollTop: 0,
            renderers: [],
        };
    },
    created() {
        window.addEventListener("load", () => {
            this.loading = false;
        });
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
        this.render();
    },
    methods: {
        render() {
            for (let i of this.renderers) i();
        },
        handleScroll() {
            let wrap = this.$refs.homePostsWrap;
            let newScrollTop = document.documentElement.scrollTop;
            if (this.scrollTop < newScrollTop) {
                this.hiddenMenu = true;
                this.showMenuItems = false;
            } else this.hiddenMenu = false;
            if (wrap) {
                if (newScrollTop <= window.innerHeight - 100) this.menuColor = true;
                else this.menuColor = false;
                if (newScrollTop <= 400) wrap.style.top = "-" + newScrollTop / 5 + "px";
                else wrap.style.top = "-80px";
            }
            this.scrollTop = newScrollTop;
        },
    },
});
app.mount("#layout");
!function(){var t=(window.innerWidth+window.innerHeight)/8,n=document.getElementById("background"),e=n.getContext("2d"),o=1,i=void 0,r=void 0,a=[],d=void 0,h=void 0,y={x:0,y:0,tx:0,ty:0,z:5e-4};function x(t){t.x=Math.random()*i,t.y=Math.random()*r}function m(){o=window.devicePixelRatio||1,i=window.innerWidth*o,r=window.innerHeight*o,n.width=i,n.height=r,a.forEach(x)}for(var c=0;c<t;c++)a.push({x:0,y:0,z:.2+.8*Math.random()});m(),function t(){e.clearRect(0,0,i,r),y.tx*=.95,y.ty*=.95,y.x+=.7*(y.tx-y.x),y.y+=.7*(y.ty-y.y),a.forEach(function(t){var n,a,e;t.x+=y.x*t.z,t.y+=y.y*t.z,t.x+=(t.x-i/2)*y.z*t.z,t.y+=(t.y-r/2)*y.z*t.z,t.z+=y.z,(t.x<-50||t.x>i+50||t.y<-50||t.y>r+50)&&(t=t,n="z",a=Math.abs(y.tx),e=Math.abs(y.ty),1<a&&1<e&&(n="h"==(e<a?Math.random()<Math.abs(y.x)/(a+e)?"h":"v":Math.random()<Math.abs(y.y)/(a+e)?"v":"h")?0<y.x?"l":"r":0<y.y?"t":"b"),t.z=.2+.8*Math.random(),"z"===n?(t.z=.1,t.x=Math.random()*i,t.y=Math.random()*r):"l"===n?(t.x=-3,t.y=r*Math.random()):"r"===n?(t.x=i+3,t.y=r*Math.random()):"t"===n?(t.x=i*Math.random(),t.y=-3):"b"===n&&(t.x=i*Math.random(),t.y=r+3))}),a.forEach(function(t){e.beginPath(),e.lineCap="round",e.lineWidth=3*t.z*o,e.strokeStyle="rgba(102,175,239,.2)",e.beginPath(),e.moveTo(t.x,t.y);var n=2*y.x,a=2*y.y;Math.abs(n)<.1&&(n=.5),Math.abs(a)<.1&&(a=.5),e.lineTo(t.x+n,t.y+a),e.stroke()}),requestAnimationFrame(t)}(),window.addEventListener("resize",m),window.addEventListener("mousemove",function(t){var n,a,e;n=t.clientX,t=t.clientY,"number"==typeof d&&"number"==typeof h&&(a=n-d,e=t-h,y.tx=y.x+a/8*o*1,y.ty=y.y+e/8*o*1),d=n,h=t}),window.addEventListener("mouseleave",function(){h=d=null})}();
!function(){function i(){scale=window.devicePixelRatio||1,n.width=window.innerWidth*scale,n.height=window.innerHeight*scale,u.scale(scale,scale)}function r(n){-1<(n=d.indexOf(n))&&d.splice(n,1)}function e(n,e){i();var t,a=function(n,e){for(var t=[],a=0;a<24;a++){var i=function(n,e){var t={};return t.x=n,t.y=e,t.color=c[anime.random(0,c.length-1)],t.radius=anime.random(o(),2*o()),t.draw=function(){u.beginPath(),u.arc(t.x,t.y,t.radius,0,2*Math.PI,!0),u.fillStyle=t.color,u.fill()},t}(n,e);t.push(i)}return t}(n,e),n=(e=e,(t={}).x=n,t.y=e,t.color=c[anime.random(0,c.length-1)],t.color="#FFF",t.radius=0,t.alpha=1,t.lineWidth=6,t.draw=function(){u.globalAlpha=t.alpha,u.beginPath(),u.arc(t.x,t.y,t.radius,0,2*Math.PI,!0),u.lineWidth=t.lineWidth,u.strokeStyle=t.color,u.stroke(),u.globalAlpha=1},t),e=anime({targets:a,x:function(n){return n.x+anime.random(-200,200)},y:function(n){return n.y+anime.random(-200,200)},radius:0,duration:function(){return anime.random(1200,1800)},easing:"easeOutExpo",complete:r}),a=anime({targets:n,radius:function(){return anime.random(8.75*o(),11.25*o())},lineWidth:0,alpha:{value:0,easing:"linear",duration:function(){return anime.random(400,600)}},duration:function(){return anime.random(1200,1800)},easing:"easeOutExpo",complete:r});d.push(e),d.push(a)}var t,a,o=function(){return parseFloat(getComputedStyle(document.documentElement).fontSize)},n=document.getElementById("fireworks"),u=n.getContext("2d"),d=[],c=["#ff324a","#31ffa6","#206eff","#ffff99"];anime({duration:1/0,update:function(){u.clearRect(0,0,n.width,n.height),d.forEach(function(n){n.animatables.forEach(function(n){n.target.draw()})})}}),document.addEventListener("mousedown",function(n){t=n.clientX,a=n.clientY,e(t,a)},!1),window.addEventListener("resize",i,!1)}();
