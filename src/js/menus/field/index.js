/*
    menu - field
*/
import $ from '../../util/dom-core.js'

// 构造函数
function Field(editor) {
    this.editor = editor
    this.$elem = $(
        `<div class="w-e-menu">
            <i style="line-height: 20px;display: block;"><svg id="fieldSvg" version="1.1" role="presentation" width="20" height="20" viewBox="0 0 1024 1024" class="svg-icon active"><path fill="#999" d="M832.125306 63.940169H192.127564C121.432134 63.940169 64.301413 121.070891 64.301413 191.76632V831.764063c0 70.691817 57.221033 128.03206 127.91285 128.03206l-0.086699 0.028899H832.125306v-0.028899a128.436654 128.436654 0 0 0 28.050589-3.099473c0.505741-0.111986 1.00787-0.234809 1.509999-0.361244q4.797319-1.134306 9.453753-2.626243l1.047607-0.343181q1.77732-0.585215 3.529353-1.221005l0.787512-0.288995q1.701459-0.628564 3.381243-1.307703 1.444976-0.581603 2.889951-1.199329 0.881435-0.379306 1.755645-0.773062t1.831507-0.841699q1.311315-0.614115 2.604568-1.253516l0.057799-0.028899q3.879759-1.929042 7.586122-4.107343a128.602826 128.602826 0 0 0 33.234438-27.898866l0.166172-0.195072q1.827894-2.167463 3.558252-4.410788l0.33957-0.440717a127.815314 127.815314 0 0 0 17.234946-30.420349l0.242033-0.614114a127.356534 127.356534 0 0 0 8.492844-38.385776q0.050574-0.816411 0.093923-1.632823c0.054187-1.083732 0.126435-2.167463 0.155335-3.283707s0.072249-2.199975 0.072249-3.305381V191.76632C960.186266 121.070891 902.817124 63.940169 832.125306 63.940169zM192.127564 895.884854A64.005193 64.005193 0 0 1 128.241582 831.764063V511.882596h127.880338v63.88237A127.858663 127.858663 0 0 0 384.125081 703.703103H640.124178a127.699716 127.699716 0 0 0 127.880338-127.938137v-64.001581l0.11921 0.119211H896.246097v319.881467a63.578925 63.578925 0 0 1-12.585737 38.053431 65.20091 65.20091 0 0 1-6.249519 7.199591c-0.361244 0.361244-0.773062 0.751387-1.159593 1.116244-0.722488 0.693588-1.473875 1.361889-2.228875 2.015741a66.046221 66.046221 0 0 1-4.540836 3.594376c-0.614115 0.44433-1.235454 0.881435-1.864018 1.300478s-1.289641 0.838086-1.943492 1.242679q-2.051865 1.267966-4.186817 2.36976-0.675526 0.361244-1.361889 0.682751-1.224617 0.596052-2.474521 1.141531-1.589473 0.689976-3.215071 1.293253-0.559928 0.205909-1.119856 0.404593-1.116244 0.390143-2.246937 0.722488-1.640047 0.505741-3.308994 0.924784l-0.079474 0.018063q-2.037416 0.505741-4.11818 0.877822c-0.885048 0.158947-1.773708 0.361244-2.66598 0.480455a64.962489 64.962489 0 0 1-8.771002 0.657463H192.127564z m575.996162-447.942427c-35.347715 0-64.059379 28.476856-64.059379 63.820958v64.001581c0 35.347715-28.592454 63.997968-63.940169 63.997968h-255.999097C348.780978 639.762934 320.062089 611.109068 320.062089 575.764966v-64.001581c0-35.347715-28.588842-63.820958-63.940169-63.820958H128.241582V191.76632A63.802896 63.802896 0 0 1 192.127564 127.880338H832.125306A64.005193 64.005193 0 0 1 896.246097 191.76632V447.942427h-128.122371z"></path><path d="M640.124178 351.851551h-96.090876V255.760676a31.970084 31.970084 0 1 0-63.940169 0v96.090875h-95.968052a31.970084 31.970084 0 1 0 0 63.940169H480.093133v95.971665a31.970084 31.970084 0 1 0 63.940169 0V415.79172h96.090876a31.970084 31.970084 0 1 0 0-63.940169z" fill="#999"></path></svg><i/>
        </div>`
    )
    this.type = 'click'

    // 当前是否 active 状态
    this._active = false
}

// 原型
Field.prototype = {
    constructor: Field,

    onClick: function () {
        const editor = this.editor
        editor.cmd.do('insertHTML', '<span data-contract-field="index" data-field-category="index" contenteditable="false" class="popover-tip">插入合同字段</span>')
    }
}

export default Field
