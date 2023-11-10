function makeFileName(fileName,addInfo="",aOrZ=""){
    const CLI_Friendly_File_Name = fileName.replace(/'+/g, '')/* .replace(/\s/g,'-').replace(/\W+^-/g, '_') */ .replace(/[^_a-z\d+]/gi, '-').replace(/-+/g, '-').replace(/-$/, '');
  if(!addInfo && !aOrZ){ 
        return CLI_Friendly_File_Name;
  } else if(addInfo){
        const addInfoToFileNameEnd = CLI_Friendly_File_Name.splice(CLI_Friendly_File_Name.length - 1, 0, addInfo);
    return addInfoToFileNameEnd;
  } else if(addInfo && aOrZ && aOrZ === 'a'){
    const addInfoToStart = CLI_Friendly_File_Name.splice(0,0,addInfo);
    return addInfoToStart;
  } else if(addInfo && aOrZ && aOrZ === 'z'){
  const addInfoToEnd = CLI_Friendly_File_Name.splice(CLI_Friendly_File_Name.length - 1, 0, addInfo);
    return addInfoToEnd;
  }                       
  }