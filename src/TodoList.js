import React, {Fragment }from 'react';
import TodoItem from './TodoItem'
import './style.css'


class TodoList extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      list: [
      ],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.getTodoItems = this.getTodoItems.bind(this)
  }


  handleBtnClick(){
    let newList = [...this.state.list, this.state.inputValue]
    this.setState({
      list: newList,
      inputValue: ''
    })
    
  }

  handleInputChange(e){
    console.log('before setState'+ this.state.inputValue)
    this.setState({
      inputValue: e.target.value
    })
    console.log('after setState'+ this.state.inputValue)
  }

  handleItemClick(index){
    console.log(index)
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list,
    })
  }



  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接收父组件传递过来的参数
  handleDelete(index){
    console.log(index)
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list,
    })
  }

  getTodoItems(){
    console.log('getTodoItems called')
    return (
      this.state.list.map((item, index) => {
        console.log('add item, item = '+ item + ', index = ' + index)
        return (
          <TodoItem 
            handleDelete={this.handleDelete}
            key={index} 
            content={item} 
            index={index} 
          />
        )
        
      })
    )
    
  }

  render(){
    // jsx语法
    return(
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}></input>
          <button className='red-btn' style={{backgroundColor: 'red', color: 'white'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    )
  }
}

// function TodoList() {
//   return (
//     <div >
//       hello world
//     </div>
//   );
// }

export default TodoList;
