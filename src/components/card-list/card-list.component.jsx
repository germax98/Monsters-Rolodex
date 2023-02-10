import Card from '../Card/card.component';
import './card-list.styles.css'
//----------Functional Component
//
const CardList =({monsters})=>(
    <div className='card-list'>
        {monsters.map(monster => {
            return <Card monster = {monster}/>
            })} 
    </div>
    )    
//----------Classcomponent
//
//class CardList extends Component {
//    render(){
//        const {monsters} = this.props;
//        return (
//            <div className='card-list'>
//                {monsters.map(monster => {
//                return (
//                    <Card monster = {monster}/>
//                )}
//                )}
//            </div>
//        )
//    }
//}

export default CardList