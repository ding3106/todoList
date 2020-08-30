import React from 'react';


class TodoItem extends React.Component {

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    const { handleDelete, index} = this.props
    console.log(this.props.index)
    handleDelete(index)
  }
  render(){
    const { content } = this.props
    // jsx语法
    return(
      <div onClick={this.handleDelete}>
        {content}
      </div>
    )
  }
}

// function TodoItem() {
//   return (
//     <div >
//       hello world
//     </div>
//   );
// }

export default TodoItem;
