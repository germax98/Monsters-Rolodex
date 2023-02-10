import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';

const App = ()=>{
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters]= useState([])
  const [filteredMonsters, setFilterMonsters]=useState(monsters)


  //---------get the Api DATA
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> setMonsters(users)
    )
  },[])//[] means that no condition will recall that fetch
  
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
      })


      setFilterMonsters(newFilteredMonsters)//Apply Filter
  },[monsters,searchField])//if monsters,searchField is changing the hook is recalled


  const onSearchChange = (event) =>{
     const searchFieldString = event.target.value.toLocaleLowerCase()
      setSearchField(searchFieldString)
      
    }//gets the value of the search field and recalls the render function 

 
  
  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler = {onSearchChange} 
        placeholder = 'search monsters'
        className = 'search-box'
        />
        
        <CardList monsters = {filteredMonsters}/>
    </div>
  )
}

//class App extends Component{
//  constructor(){
//    super();
//    this.state={
//      monsters: [],
//      searchField:'',
//    }
//  }
//
//  componentDidMount(){
//    fetch('https://jsonplaceholder.typicode.com/users')
//      .then((response) => response.json())
//      .then((users)=> this.setState(()=> {
//        return {monsters: users}
//      }
//      ))
//  }
//  onSearchChange = (event)=>
//  {
//    const searchField = event.target.value.toLocaleLowerCase()
//    this.setState(()=>{
//      return {searchField}
//    })
//
//  }
//  render(){
//    const { monsters, searchField } = this.state
//    const { onSearchChange } = this
//    const filteredMonster = monsters.filter((monster)=>{
//      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
//    })
//    
//    return (
//    <div className="App">
//        <h1 className='app-title'>Monsters Rolodex</h1>
//
//        <SearchBox onChangeHandler = {onSearchChange} 
//        placeholder = 'search monsters'
//        className = 'search-box'
//        />
//        <CardList monsters = {filteredMonster}/>
//    </div>
//  );
//  }
//  
//}
//
export default App;
//