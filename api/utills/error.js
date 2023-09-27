export const createError =(status,message)=>{
    const err=new Error();
    err.status=status;
    err.messag= message;
    return err;
}