
export const saveDoc = (jsonDoc) => {
    console.log(jsonDoc);
    sampleDoc = jsonDoc;
}

export var sampleDoc = {
    type: "doc",
    content: [
        {
            type: "heading",
            attrs: {
                dir: null,
                ignoreBidiAutoUpdate: null,
                level: 1
            },
            content: [
            {
                type: "text",
                text: "Principles of Web Design"
            }
            ]
        },
        {
            type: "paragraph",
            attrs: {
            dir: "ltr",
            ignoreBidiAutoUpdate: null
            }, content: [
            {
                type: "text",
                text: "text1"
            }
            ]
        },
        {
            type: "heading",
            attrs: {
            dir: null,
            ignoreBidiAutoUpdate: null,
            level: 2
            },
            content: [
            {
                type: "text",
                text: "Visual Hierarchy"
            }
            ]
        },
        {
            type: "heading",
            attrs: {
            dir: null,
            ignoreBidiAutoUpdate: null,
            level: 3
            },
            content: [
            {
                type: "text",
                text: "Test header"
            }
            ]
        },
        {
            type: "paragraph",
            attrs: {
            dir: null,
            ignoreBidiAutoUpdate: null
            },
            content: [
            {
                type: "text",
                marks: [
                {
                    type: "italic"
                }
                ], text: "text2"
            }
            ]
        },
        {
            type: "paragraph",
            attrs: {
            dir: null, ignoreBidiAutoUpdate: null
            }
        },
        {
            type: "heading",
            attrs: {
            dir: null,
            ignoreBidiAutoUpdate: null,
            level: 2
            },
            content: [
            {
                type: "text",
                text: "Cognitive Load"
            }
            ]
        },
    ]
};
