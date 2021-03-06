import {useState} from "react";

const MyPhotoInput =({
    refFormik,
    field
    
}) => {

    const [photo, setPhoto] = useState("https://herrmans.eu/wp-content/uploads/2019/01/765-default-avatar.png");   
    
    const onChangeHandler = (event) => {
        const file = event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(file));
        refFormik.current.setFieldValue(field,file);
        
    }
    
    return (
        <div className="mb-3">
            <label htmlFor={field} className="form-label">
                <img src={photo} alt="no img"
                    width="150"
                    style={{cursor: "pointer"}}/>    
            </label>
            <input type="file" 
                    id={field}
                    name={field}
                    className="d-none"
                    onChange={onChangeHandler}

                    />
        </div>
    );
}
export default MyPhotoInput;