import React from 'react'
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
async function UploadTag(props) {
    const {
        tag_styles = [],
        tag_roles = [],
        tag_all = []
    } = props;
    if (tag_styles.length === 0 && tag_roles.length === 0 && tag_all.length === 0) {
        const tagId = "";
        return { tagId }
    } else {
        const tagDetails = {
            tag_styles: tag_styles,
            tag_roles: tag_roles,
            tag_all: tag_all,
        };
        const newTag = await API.graphql({
            query: mutations.createTag,
            variables: { input: tagDetails },
        });
        const tagId = newTag.data.createTag.id;
        return { tagId };
    }
}
export default UploadTag;