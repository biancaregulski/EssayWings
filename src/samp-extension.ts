import {
  ApplySchemaAttributes,
  extension,
  ExtensionTag,
  MarkExtension,
  MarkExtensionSpec,
  MarkSpecOverride,
  command,
  CommandFunction,
  getTextSelection,
  PrimitiveSelection,
  toggleMark,
} from 'remirror';

export interface SampOptions {}

@extension<SampOptions>({ defaultOptions: {} })
export class SampExtension extends MarkExtension<SampOptions> {
  get name() {
    return 'samp' as const;
  }

  createTags() {
    return [ExtensionTag.FormattingMark, ExtensionTag.FontStyle];
  }

  @command()
  toggleSamp(selection?: PrimitiveSelection): CommandFunction {
    return toggleMark({ type: this.type, selection});
  }

  @command()
  setSamp(selection?: PrimitiveSelection): CommandFunction {
    return ({ tr, dispatch}) => {
      const { from, to } = getTextSelection(selection ?? tr.selection, tr.doc);
      dispatch?.(tr.addMark(from, to, this.type.create({highlight: "blue" })));

      return true;
    }
  }

  @command()
  removeSamp(selection?: PrimitiveSelection): CommandFunction {
    return ({ tr, dispatch }) => {
      const { from, to } = getTextSelection(selection ?? tr.selection, tr.doc);

      if (!tr.doc.rangeHasMark(from, to, this.type)) {
        return false;
      }

      dispatch?.(tr.removeMark(from, to, this.type));

      return true
    };
  }

  createMarkSpec(extra: ApplySchemaAttributes, override: MarkSpecOverride): MarkExtensionSpec {
    return {
      ...override,
      attrs: extra.defaults(),
      parseDOM: [
        {
          tag: 'samp',
          getAttrs: extra.parse,
        },
        ...(override.parseDOM ?? []),
      ],
      toDOM: (node) => {
        return ['samp', extra.dom(node), 0];
      },
    };
  }
}