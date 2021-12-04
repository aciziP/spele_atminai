let adrese = window.location.hash //Pievieno datus
//console.log(adrese)
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards



let laukumuSaturs = ['🤩','🥳','😎','🤩','🥳','😎']
let atvertieLaukumi = []
let pedejieDivi = []

function veiktGajienu(laukums)
{
    let atvertsJaunsLaukums = false
    if( atvertieLaukumi.indexOf(laukums) == -1 )
    {
        atvertsJaunsLaukums = true
    }
    else
    {
        atvertsJaunsLaukums = false
    }
    
    
    if(atvertsJaunsLaukums)
    {
        //runās par stilu, mainīt display īpašību, kļūs par block (būs redzams)
        //document.querySelector('#'+laukums+' div').style.display="block"
        
        //Nomainīts uz visibility. Nemaina izkārtojumu!
        document.querySelector('#'+laukums+' div').style.visibility="visible";
        document.querySelector('#'+laukums+' div').style.opacity=1
        pedejieDivi.push(laukums)
    }

    if( pedejieDivi.length == 2 )
    {
        let atverts1 = pedejieDivi[0].replace('L','')
        let atverts2 = pedejieDivi[1].replace('L','')

        console.log(atverts1)

        atverts1 = parseInt(atverts1,10)
        atverts2 = parseInt(atverts2,10)

        if( laukumuSaturs[atverts1] == laukumuSaturs[atverts2] )
        {
            console.log('atvērti vienādi')
            atvertieLaukumi.push( pedejieDivi[0],pedejieDivi[1] )
            
        }
        else
        {
            console.log('nav atvērti vienādi')
            document.querySelector('#'+pedejieDivi[0]+' div').style.opacity=0.1
            document.querySelector('#'+pedejieDivi[1]+' div').style.opacity=0.1
        }


        pedejieDivi = []
    }

    if( laukumuSaturs.length == atvertieLaukumi.length )
    {
        // var hey = document.getElementById("L5");
        // console.log(hey)
        // if (window.getComputedStyle(hey).visibility === "visible"){
        //     setTimeout(()=>{
        //         alert('Apsveicam!')
        //     },1000);
            
        // }

        setTimeout(()=>
        {
            alert('Apsveicam!')
        },1000);
        
    }
}