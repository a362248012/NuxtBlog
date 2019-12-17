import {Avatar, Divider} from "antd"
import "../static/style/components/author.css"
const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="/20180825150613_jyfjw.jpg"/></div>
            <div className="author-introductio">
                驴妈妈程序员，研究如何买旅游产品
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"/>
                <Avatar size={28} icon="qq" className="account"/>
                <Avatar size={28} icon="wechat" className="account"/>
            </div>
        </div>
    )
}

export default Author