
import colors from './../constants/colors';

// various containers for showcasing text and images together and separately 
const scrollItemCenter = (image, texts, mapping, source) => {
    const items = []

    for (const [index, value] of texts.entries()) {
        if (mapping[index] == 'bold') {
            items.push(<b key={index}>{value}</b>)
        } else {
            items.push(<a key={index}>{value}</a>)
        }
        
    }
  
    return (
        <div style={{margin: 'auto', width:'50%'}}>
            <img alt="" src={image} width="100%" height="100%" /> 
            <div style={{marginTop: '20px'}}>
                <div display= 'flex' id='centerContainer'>
                    {items}
                </div>
                <i style={{marginLeft: '20px'}}>
                    - {source}
                </i>
            </div>
        </div>
    );
}

const scrollItemCenterImageOnly = (image, source) => (
    <div style={{margin: 'auto', width:'50%'}}>
        <img alt="" src={image} width="100%" height="100%" /> 
        <i style={{marginLeft: '50px'}}>
                - {source}
        </i>
    </div>
);

const scrollItemCenterTextOnly = (texts, mapping, source) => {
    const items = []

    for (const [index, value] of texts.entries()) {
        if (mapping[index] == 'bold') {
            items.push(<b key={index}>{value}</b>)
        } else {
            items.push(<a key={index}>{value}</a>)
        }
        
    }
    
    return (
        <div style={{margin: 'auto', width:'50%'}}>
            <div>
                {items} 
            </div>
            <i style={{marginLeft: '20px'}}>
                - {source}
            </i>
        </div>
        );
}

const scrollItemCenterTitle = (titleText, subtitleText) => (
    <div>
        <div style = {{fontSize: '80px', fontFamily: 'sans-serif', textAlign: 'center'}}>
            {titleText} 
        </div>
        <div style = {{fontSize: '20px', fontFamily: 'sans-serif', color: colors.medium_grey, textAlign: 'center'}} >
            {subtitleText}
        </div>
    </div>
);

const scrollItemLTR = (image, texts, mapping, imageSource, textSource) => {
    const items = []

    for (const [index, value] of texts.entries()) {
        if (mapping[index] == 'bold') {
            items.push(<b key={index}>{value}</b>)
        } else {
            items.push(<a key={index}>{value}</a>)
        }
        
    }

    return (
        <div style={{display: 'flex', width:'100%'}}>
            <div style={{ width:'50%', marginRight: '10px'}}>
                <img alt="" src={image} width="100%" height="100%" /> 
                <i style={{marginLeft: '50px'}}>
                    - {imageSource}
                </i>
            </div>
            <div style={{ width:'50%', marginTop: '8%', marginLeft: '10px'}}>
                <div>
                    {items}
                </div>
                <i style={{marginLeft: '20px'}}>
                    - {textSource}
                </i> 
            </div>
            
        </div>
    );
}

const scrollItemRTL = (image, texts, mapping, imageSource, textSource) => {

    const items = []

    for (const [index, value] of texts.entries()) {
        if (mapping[index] == 'bold') {
            items.push(<b key={index}>{value}</b>)
        } else {
            items.push(<a key={index}>{value}</a>)
        }
        
    }
    
    return (
        <div style={{display: 'flex', width:'100%'}}>
            <div style={{ width:'50%', marginTop: '8%', marginRight: '10px'}}>
                <div>
                   {items}
                </div>
                <i style={{marginLeft: '20px'}}>
                    - {textSource}
                </i> 
            </div>
            <div style={{ width:'50%', marginLeft: '10px'}}>
                <img alt="" src={image} width="100%" height="100%" /> 
                <i style={{marginLeft: '50px'}}>
                    - {imageSource}
                </i>
            </div>
            
        </div>
    );
}

const scrollItemRTLTextOnly = (texts1, texts2, mapping1, mapping2, textSource1, textSource2) => {
    
    const items1 = []
    const items2 = []

    for (const [index, value] of texts1.entries()) {
        if (mapping1[index] == 'bold') {
            items1.push(<b key={index}>{value}</b>)
        } else {
            items1.push(<a key={index}>{value}</a>)
        }
        
    }

    for (const [index, value] of texts2.entries()) {
        if (mapping2[index] == 'bold') {
            items2.push(<b key={index}>{value}</b>)
        } else {
            items2.push(<a key={index}>{value}</a>)
        }
        
    }

    return (
        <div style={{ display: 'flex', width:'100%'}}>
            <div style={{ width:'50%', marginRight: '10px'}}>
                <div>
                    {items1}
                </div>
                <i style={{marginLeft: '20px'}}>
                    - {textSource1}
                </i> 
            </div>
            <div style={{ width:'50%', marginLeft: '10px'}}>
                <div>
                    {items2}
                </div>
                <i style={{marginLeft: '20px'}}>
                    - {textSource2}
                </i> 
            </div>
        </div>
    );
}

const scrollItemLTRImageOnly = (image1, image2, imageSource1, imageSource2) => (
        <div style={{display: 'flex', width:'100%'}}>
            <div style={{ width:'50%', marginRight: '10px'}}>
                <img src={image1} width="100%" height="100%" /> 
                <i style={{marginLeft: '50px'}}>
                    - {imageSource1}
                </i>
            </div>
            <div style={{ width:'50%', marginLeft: '10px'}}>
                <img src={image2} width="100%" height="100%" /> 
                <i style={{marginLeft: '50px'}}>
                    - {imageSource2}
                </i>
            </div>
        </div>
);

export {
    scrollItemCenter,
    scrollItemCenterImageOnly,
    scrollItemCenterTextOnly,
    scrollItemCenterTitle,
    scrollItemLTR,
    scrollItemRTL,
    scrollItemLTRImageOnly,
    scrollItemRTLTextOnly,
}