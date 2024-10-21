import './style.css';
import {LIBRARIES, LIBRARIESLISTHEADER} from "../../utils/constants.ts";

export default function LibrariesList() {
    
    return (
        <table>
            <thead>
            <tr>
                {LIBRARIESLISTHEADER.map((item) => (
                    <th key={item.id}>{item.name}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {LIBRARIES.map((item) => (
                <tr key={item.id}>
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