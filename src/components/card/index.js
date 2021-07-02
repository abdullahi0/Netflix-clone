import React,{useState,useContext,createContext} from 'react'
import { Container,Group,Meta,Item, Maturity,Entities,Title,SubTitle,Text,Image,FeatureText,FeatureTitle,FeatureClose,Content,Feature } from './styles/card';

export const FeatureContext = createContext();
export default function Card({children, ...restProps}) {
    const [showFeature,setShowFeature] = useState(false);
    const [itemFeature,setItemFeature] = useState({});
    
    return (
        <FeatureContext.Provider value={{showFeature,setShowFeature,itemFeature,setItemFeature}}>
            <Container {...restProps}>
                {children}
            </Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}




Card.SubTitle = function CardSubTitle({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}



Card.Meta = function CardMeta({children,...restProps}){
    return <Meta {...restProps}>{children}</Meta>
}

Card.Entities = function CardEntities({children,...restProps}){
    return <Entities {...restProps}>{children}</Entities>
}

Card.Maturity = function CardMaturity({children,...restProps}){
    return <Maturity {...restProps}>{children}</Maturity>
}

Card.Item = function CardItem({item,children,...restProps}){
    const {setShowFeature,setItemFeature} =useContext(FeatureContext);
    return ( <Item 
                onClick={() =>{
                    setItemFeature(item);
                    setShowFeature(true);
                }}
                {...restProps}>{children}</Item>

    )
}

Card.Image = function CardImage({...restProps}){
    return <Image {...restProps}/>
}

Card.FeatureTitle = function CardFeatureTitle({children,...restProps}){
    return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}

Card.FeatureText = function CardFeatureText({children,...restProps}){
    return <FeatureText {...restProps}>{children}</FeatureText>
}

Card.FeatureClose = function CardFeatureClose({children,...restProps}){
    return <FeatureClose {...restProps}>{children}</FeatureClose>
}

Card.Content = function CardContent({children,...restProps}){
    return <Content {...restProps}>{children}</Content>


}

Card.Feature = function CardFeature({category,children,...restProps}){
    const {showFeature,setShowFeature,itemFeature} = useContext(FeatureContext);
    return showFeature ?(
        
        <Feature 
            src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
            {...restProps}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close"/>
                </FeatureClose>
            
            <Group margin="30px 0" flexDirection="row" alignItems="center">
                <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG': itemFeature.maturity}</Maturity>
                <FeatureText fontWeight="bold">
                   
                  {itemFeature.genre.charAt(0).toUpperCase() +
                  itemFeature.genre.slice(1)}
                </FeatureText>
            </Group>
                    {children}
            </Content>
        </Feature>
    ):null;
    }