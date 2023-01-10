import { connect } from 'react-redux';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './constants';

const App = ({ counter, incrementCounter, decrementCounter }) => {
    return (
        <div>
            <h1>Hello world!</h1>
            <p>Counter: {counter}</p>
            <div>
                <button onClick={incrementCounter}>Increment counter by 1</button>
                <button onClick={decrementCounter}>Decrement counter by 1</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: () => dispatch({ type: INCREMENT_COUNTER }),
    decrementCounter: () => dispatch({ type: DECREMENT_COUNTER }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
