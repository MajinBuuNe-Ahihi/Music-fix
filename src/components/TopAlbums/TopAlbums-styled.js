import styled from "styled-components"

export const SlideAlbums = styled.div`
    .topTitle {
    font-size: 21px;
    margin-bottom: 20px
    }
    .abItem {
        display: inline-block;
    }
    .abItem a {
        text-decoration: none;
    }
    .abItem .abCover {
        height: 150px;
        width: 150px;
        overflow: hidden
    }
    .abItem img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .abName {
        padding-top: 15px;
        font-size: 17px;
        color: #fff;
    }
    .abArtist {
        color: #fff;
        padding-top: 5px;
        font-size: 12px;
    }
`