import React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { Parser } from 'xml2js';
import { useDispatch } from 'react-redux';
import { AlteryxWorkflow } from '~/models';
import { AddAlteryxWorkflowAction } from '~/store/alteryx-workflow/alteryx-workflow-actions';

const getColor = (props: any) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

const Uploader = () => {
  const dispatch = useDispatch();

  const onDrop = async ([ file ]: any) => {
    const xml = await file.text();
    const parser = new Parser();

    const result = await parser.parseStringPromise(xml);
    const workflow: AlteryxWorkflow = {
      id: Date.now().toString(),
      name: file.name,
      timeAdded: new Date().toDateString(),
      content: result,
      xml,
    };

    dispatch(new AddAlteryxWorkflowAction(workflow));
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop });
  
  return (
    <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
      <input {...getInputProps()} />
      <p>Add Alteryx workflow</p>
    </Container>
  );
}

export default Uploader;
