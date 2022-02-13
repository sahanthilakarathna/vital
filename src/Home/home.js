import React,{ useState} from "react";
import './home.css';
import Item from "../Item";
import i18n from "../i18n";
import Language from "../Language";
import Button from "../Button";
const Home = props =>{

    const [people,setPeople] = useState();
    const [ages,setAges] = useState();
    function search(){
        fetch('https://randomuser.me/api/?results=3')
            .then(res=>res.json())
            .then(
                (result)=>{
                    setPeople(result);
                }
            )
    }
    function calAge(){
        fetch('https://api.agify.io/?name[]='+people.results[0].name.first+'&name[]='+people.results[1].name.first+'&name[]='+people.results[2].name.first)
            .then(res=>res.json())
            .then(
                (result)=>{
                    setAges(result);
                }
            )
    }
    function clear(){
        setAges();
        setPeople();
        i18n.changeLanguage('en');
        window.location.reload();
    }
    const items = people ? people.results.map((data,index)=>{
        return <Item data={data} key={index} age={ages ? ages[index] : null}/>
    }) : null;

    return(
        <div className={'main'}>
            <div className={'btns'}>
                <Button click={search} title={'Search Random People'}/>
                <Button click={calAge} disabled={!people} title={'Calculate Age'}/>
                <Button click={clear} title={'Clear'}/>
                <Language/>
            </div>
            <div className={'items'}>
                {items}
            </div>
        </div>
    )
}
export default Home;
