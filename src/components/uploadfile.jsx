function UploadFile(){
    return(
        <form method="post" action="/upload" enctype="multipart/form-data">
            <input type="file" name="file" />
            <input type="submit" value="Upload" /> 
        </form>

    )
}
export default UploadFile;