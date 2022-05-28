import { Controller, Get, Post } from '@nestjs/common'
import {
  ApiBody,
  ApiExtraModels,
  ApiProperty,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger'

type ApplicationEvent = {
  createDate: string
  sequence: number
  payload: UserCreatedEventPayloadDto | UserConfirmedEventPayloadDto
}

class UserCreatedEventPayloadDto {
  @ApiProperty({
    type: String,
    format: 'email',
    nullable: false,
    required: true,
    description: 'User email address.',
  })
  public readonly email: string

  @ApiProperty({
    type: String,
    format: 'password',
    nullable: false,
    required: true,
    description: 'User password.',
  })
  public readonly password: string
}

class UserCreatedEventDto implements ApplicationEvent {
  @ApiProperty({
    type: String,
    format: 'date-time',
    nullable: false,
    required: true,
    description: 'Create date.',
  })
  public readonly createDate: string

  @ApiProperty({
    type: Number,
    format: 'integer',
    minimum: 0,
    maximum: Number.MAX_SAFE_INTEGER,
    required: true,
    nullable: false,
    description: 'Sequence number.',
  })
  public readonly sequence: number

  @ApiProperty({
    type: UserCreatedEventPayloadDto,
  })
  public readonly payload: UserCreatedEventPayloadDto
}

class UserConfirmedEventPayloadDto {
  @ApiProperty({
    type: String,
    format: 'date-time',
    nullable: false,
    required: true,
    description: 'The date when user was confirmed.',
  })
  public readonly confirmationDate: string
}

class UserConfirmedDto implements ApplicationEvent {
  @ApiProperty({
    type: String,
    format: 'date-time',
    nullable: false,
    required: true,
    description: 'Create date.',
  })
  public readonly createDate: string

  @ApiProperty({
    type: Number,
    format: 'integer',
    minimum: 0,
    maximum: Number.MAX_SAFE_INTEGER,
    required: true,
    nullable: false,
    description: 'Sequence number.',
  })
  public readonly sequence: number

  @ApiProperty({
    type: UserConfirmedEventPayloadDto,
  })
  public readonly payload: UserConfirmedEventPayloadDto
}

class Node {
  @ApiProperty({
    type: String,
    format: 'unknown',
    nullable: false,
    required: true,
    description: 'Name of the node.',
    example: 'Everyone just loves the bitterness of meatloaf ricotta enameld with baking powder.',
  })
  public readonly name: string

  @ApiProperty({
    type: () => [Node],
    required: true,
    nullable: false,
    example: [
      {
        name: 'Cabbage fritters has to have a smooth, sliced seaweed component.',
        children: [
          {
            name: 'Everyone just loves the bitterness of pickles stir-fry varnishd with thyme.',
            children: [],
          },
          {
            name: 'Per guest prepare a handfull and a half teaspoons of beer with shreded melon for dessert.',
            children: [],
          },
        ],
      },
    ],
  })
  public readonly children: Node[]
}

@Controller('control-sample')
@ApiTags('control-sample')
export class ControlSampleController {
  @Post('baseline')
  @ApiBody({
    schema: {
      description: 'This is baseline description.',
      nullable: false,
      required: ['boolean'],
      type: 'object',
      properties: {
        boolean: {
          type: 'boolean',
          nullable: false,
          description: 'This is a boolean type field.',
          example: true,
          examples: [true, false],
          default: true,
        },
        integer: {
          type: 'number',
          format: 'integer',
          nullable: false,
          description: 'This is an integer type field.',
          example: 50,
          examples: [1, 10, 100],
          minimum: 1,
          maximum: 100,
        },
        float: {
          type: 'number',
          format: 'float',
          nullable: false,
          description: 'This is an integer type field.',
          example: 50.555,
          examples: [-55.455, 10.15, 99.995],
          minimum: -100,
          maximum: 100,
        },
        range: {
          description: 'This is a range field',
          nullable: false,
          oneOf: [
            {
              type: 'number',
              format: 'integer',
              minimum: 0,
              maximum: 10,
              example: 5,
            },
            {
              type: 'number',
              format: 'integer',
              minimum: 90,
              maximum: 100,
              example: 95,
            },
          ],
        },
        datetime: {
          description: 'This is a datetime field.',
          type: 'string',
          format: 'date-time',
          nullable: false,
          example: '2022-05-23T12:00:00.000Z',
        },
        enum: {
          type: 'string',
          format: 'enum',
          description: 'This is an enum field.',
          enum: ['small', 'medium', 'large'],
          example: 'small',
        },
        jwt: {
          type: 'string',
          format: 'jwt',
          description: 'This is a jwt field.',
          example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.UIZchxQD36xuhacrJF9HQ5SIUxH5HBiv9noESAacsxU',
        },
        uuid: {
          type: 'string',
          format: 'uuid',
          description: 'This is a uuid field.',
          example: '86ba438a-3dec-4b13-a90a-1f8e74ff3e15',
        },
        password: {
          type: 'string',
          format: 'password',
          description: 'This is a password field.',
          example: 'Asdf1234!',
        },
        stringInteger: {
          type: 'string',
          format: 'integer',
          description: 'This is a string integer field.',
          example: '213409675345892374652357121358901735138905710',
        },
        stringFloat: {
          type: 'string',
          format: 'float',
          description: 'This is a string integer field.',
          example: '18402396723027501023845126353187563467238.25612380951',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        range: {
          description: 'This is a range field',
          nullable: false,
          type: 'number',
        },
      },
    },
  })
  public async baseline() {}

  @Get('pagination')
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        pagination: {
          type: 'object',
          properties: {
            meta: {
              type: 'object',
              properties: {
                page: {
                  type: 'number',
                  format: 'integer',
                },
                perPage: {
                  type: 'number',
                  format: 'integer',
                },
                totalCount: {
                  type: 'number',
                  format: 'integer',
                },
              },
            },
            filters: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  operator: {
                    type: 'string',
                  },
                  value: {
                    type: 'string',
                  },
                },
              },
            },
            sort: {
              type: 'array',
              items: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              username: {
                type: 'string',
                format: 'unknown',
              },
              age: {
                type: 'number',
                format: 'integer',
              },
            },
          },
        },
      },
    },
  })
  public async pagination() {}

  /**
   * It seems to me that the tree schema I declared here is correct even though it does not display correctly in swagger ui. (https://stackoverflow.com/questions/36866035/how-to-refer-to-enclosing-type-definition-recursively-in-openapi-swagger).
   */
  @Post('tree')
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      $ref: getSchemaPath(Node),
    },
  })
  @ApiExtraModels(Node)
  public async tree() {}

  @Get('extra-models')
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          format: 'email',
        },
        events: {
          type: 'array',
          items: {
            oneOf: [
              { $ref: getSchemaPath(UserConfirmedDto) },
              { $ref: getSchemaPath(UserCreatedEventDto) },
            ],
          },
        },
      },
    },
  })
  @ApiExtraModels(
    UserConfirmedDto,
    UserConfirmedEventPayloadDto,
    UserCreatedEventDto,
    UserCreatedEventPayloadDto,
  )
  public async extraModels() {}

  @ApiResponse({
    status: 200,
    schema: {
      type: 'array',
      maxItems: 20,
      minItems: 10,
      items: {
        type: 'array',
        maxItems: 20,
        minItems: 10,
        items: {
          type: 'object',
          properties: {
            latitude: {
              type: 'number',
              format: 'float',
            },
            longitude: {
              type: 'number',
              format: 'float',
            },
          },
        },
      },
    },
  })
  @Get('matrix')
  public async matrix() {}
}
