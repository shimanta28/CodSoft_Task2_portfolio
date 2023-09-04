const observer=new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

const ow=new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-width')
            
        }
        else{
            entry.target.classList.remove('show-width');
        }
    });
});

const hdnw=document.querySelectorAll('.hidden-width');
hdnw.forEach((el)=>ow.observe(el));

const fonthide=new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-font')
        }
        else{
            entry.target.classList.remove('show-font');
        }
    });
});




const hidefnt=document.querySelectorAll('.hidden-font');
hidefnt.forEach((el)=>fonthide.observe(el));



const hdr=new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-right')
        }
        else{
            entry.target.classList.remove('show-right');
        }
    });
});




const hider=document.querySelectorAll('.hidden-right');
hider.forEach((el)=>hdr.observe(el));



const counts=document.querySelectorAll('.fact-numb')
const speed=120;

counts.forEach((counter)=>{
    function updata(){
        const target=Number(counter.getAttribute('data-target'))
        const count =Number(counter.innerHTML)
        const inc=target/speed;
        if(count<target){
            counter.innerHTML=Math.floor(inc+count)
            setTimeout(updata, 1)
        }
        else{
            counter.innerHTML=target
        }

    }
    updata()
})




const hrw=new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('srs')
        }
        else{
            entry.target.classList.remove('srs');
        }
    });
});




const hiders=document.querySelectorAll('.hrs');
hiders.forEach((el)=>hrw.observe(el));




const hpb=new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            
            if(entry.target.getAttribute('value')=="1"){
            entry.target.classList.add('show-prog-bar1')}
            else if(entry.target.getAttribute('value')=="2"){
                entry.target.classList.add('show-prog-bar2')

            }
            else{
                entry.target.classList.add('show-prog-bar3')
            }
        }
        else{
            entry.target.classList.remove('show-prog-bar1');
            entry.target.classList.remove('show-prog-bar2');
            entry.target.classList.remove('show-prog-bar3');
        }
    });
});




const hp=document.querySelectorAll('.hide-prog-bar');
hp.forEach((el)=>hpb.observe(el));
