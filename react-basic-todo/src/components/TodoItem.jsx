import React, { Component } from 'react';
import '../assets/stylesheets/css/TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    console.log(id);

    return (
      <div
        className="todo-item"
        onClick={() =>
          // console.log('toggle checked', id)
          onToggle(id)
        }
      >
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // 이벤트 버블링 현상으로 onToggle 이 실행되지 않도록 함.
            // console.log('remove', id);
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          {/*(``) Template literals*/}
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">&#10003;</div>}
      </div>
    );
  }
}

export default TodoItem;
