import {GrDocumentPdf, GrDocumentText} from "react-icons/gr";
import {Badge, Tooltip} from "antd";
import FileLink from "../../../../../WebstormProjects/FileLink/FileLink";
import React from "react";
import {Link} from "react-router-dom";
import Button from "../../../../../WebstormProjects/Button/Button";
import {useTranslation} from "react-i18next";
import {BASE_URL} from "../common/requester";


const FileLinkIcon = ({file, fileName, count, placement = 'bottom'}) => {
  const {t} = useTranslation()
  if (!file) return null;

  let title = t(`Посмотреть ${fileName} в формате PDF`);

  const renderIcon = () => <GrDocumentPdf size="1.2em"/>

  return (
    <Tooltip {...{placement, title}} arrowPointAtCenter>
      <FileLink {...{file}}>
        {!count ?
          renderIcon() :
          <Badge {...{count}} size="small" color="green">
            {renderIcon()}
          </Badge>
        }
      </FileLink>
    </Tooltip>
  )
}

export default FileLinkIcon


export const PageLinkIcon = ({file, fileName, to, count, placement = 'bottom'}) => {
  const {t} = useTranslation()
  if (!file) return null;

  let title = t(`Посмотреть ${fileName}`);

  return (
    <Tooltip {...{placement, title}} arrowPointAtCenter>
      <Link to={to} target="_blank">
        <Badge count={count} size="small" color="green">
          <GrDocumentText size="1.2em"/>
        </Badge>
      </Link>
    </Tooltip>
  )
}

export const FileLinkButton = ({file, fileName, count, type, placement = 'bottom'}) => {
  const {t, i18n: {language}} = useTranslation()
  if (!file) return null;

  let title = t(`Посмотреть ${fileName} в формате PDF`)

  const renderCont = () => (
    <Button>
      <FileLink {...{file}}>
        <GrDocumentPdf/> {t(fileName)}
      </FileLink>
    </Button>
  );

  return (
    <Tooltip {...{placement, title}} arrowPointAtCenter>
      {!count ?
        renderCont() :
        <Badge {...{count}} size="small" color="green">
          {renderCont()}
        </Badge>
      }
    </Tooltip>
  )
}

export const PageLinkButton = ({file, fileName, to, count, placement = 'bottom'}) => {
  const {t} = useTranslation()
  if (!file) return null;

  let title = t(`Посмотреть ${fileName}`);

  return (
    <Tooltip {...{placement, title}} arrowPointAtCenter>
      <Badge count={count} size="small" color="green">
        <Button>
          <Link to={to} target="_blank">
            <GrDocumentText/> {t(fileName)}
          </Link>
        </Button>
      </Badge>
    </Tooltip>
  )
}

export const ApiLinkButton = ({file, fileName, path, placement = 'bottom'}) => {
  const {t} = useTranslation()
  if (!file) return null;

  let title = t(`Посмотреть ${fileName}`);

  return (
    <Tooltip {...{placement, title}} arrowPointAtCenter>
      <Button>
        <a href={`${BASE_URL}${path}`} target="_blank">
          <GrDocumentPdf/> {fileName}
        </a>
      </Button>
    </Tooltip>
  )
}
