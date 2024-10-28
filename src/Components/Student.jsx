import PropsTypes from "prop-types";
import '../Styles/student.css'
import PropTypes from "prop-types";
export const Student = (props) => {
    return (
        <div className="student">
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{props.name}</td>

                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{props.age}</td></tr>
                    <tr>
                        <td>IsMarried</td>
                        <td>{props.isMarried ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
Student.PropsTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMarried: PropTypes.bool
};
Student.defaultProps={
    name:"N/A",
    age:0,
}

