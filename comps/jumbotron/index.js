import React from 'react'
import {Inner, Container, Title, Item, SubTitle, Pane, img} from './styles/jumbotron'

export default function index( {children,  direction = 'row', ...resProps} ) {
    return (
     
             <Inner >
                {children}
            </Inner>   

        
    )
}

index.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

index.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

index.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

index.Pane = function JumbotronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}

index.Image = function JumbotronImage({ ...restProps}){
    return <img {...restProps} />
}
