import './style.css';
import {LIBRARIES, LIBRARIESLISTHEADER} from "../../utils/constants.ts";

export default function LibrariesList() {
    
    return (
        <table>
            <thead>
            <tr>
                {LIBRARIESLISTHEADER.map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {LIBRARIES.map((item, index) => (
                <tr key={index}>
                    <td>{item.library}</td>
                    <td>{item.language}</td>
                    <td>{item.framework}</td>
                    <td>{item.downloads}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};