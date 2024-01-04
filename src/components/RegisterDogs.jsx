import React, {useState} from 'react'
import './RegisterDogs.css';
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'

import dog_icon from '../components/Assets/perro.png'
import bone_icon from '../components/Assets/hueso.png'


export const RegisterDogs = () => {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState ("No selected file")

  return (
    <div className='container'>
        <div className="header">
            <div className="text"> Registration Form</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={dog_icon} alt="" />
                <input type="text" placeholder='Name of your dog' />
            </div>
            <div className="input">
                <img src={bone_icon} alt="" />
                <input type="text" placeholder='Age'/>
            </div>
            <form action="" onClick={() => document.querySelector(".input-field").click()}>
                <input type="file" accept='image/*' className='input-field' hidden
                    onChange={({target: {files}}) => {
                        files[0] && setFileName(files[0].name)
                        if(files){
                            setImage(URL.createObjectURL(files[0]))
                        }
                    } }
                />
                {image ?
                <img src={image} width={230} height={230} alt={fileName} />
                :
                <>
                <MdCloudUpload color='#1475cf' size={60}/>
                <p>Browse Images to Upload</p>
                </>    
            }
            </form>

            <section className='uploaded-row'>
                <AiFillFileImage color='#1475cf'/>
                <span className='upload-content'>
                    {fileName}
                    <MdDelete
                    onClick={()=> {
                        setFileName("Not selected File")
                        setImage(null)
                    }}
                    />
                </span>
            </section>
                
                <div className="submit-container">
                    <div className="submit">Send</div>
                </div>
        </div>
    </div>
  )
}

export default RegisterDogs;